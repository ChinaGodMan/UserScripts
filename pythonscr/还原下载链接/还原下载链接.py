import os
from html import escape
from urllib.parse import quote

# GitHub 仓库的原始文件 URL
repo_url = 'https://raw.githubusercontent.com/ChinaGodMan/UserScripts/main/'

def read_gitignore(directory):
    gitignore_path = os.path.join(directory, '.gitignore')
    ignore_patterns = []
    
    if os.path.isfile(gitignore_path):
        with open(gitignore_path, 'r', encoding='utf-8') as f:
            ignore_patterns = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    return ignore_patterns

def matches_ignore_patterns(filename, patterns):
    from fnmatch import fnmatch
    return any(fnmatch(filename, pattern) for pattern in patterns)

def generate_tree(dir_path, relative_path='', level=0, search_query=None, ignore_patterns=None):
    # 定义层级颜色
    background_colors = ['#CCE5FF', '#D4EDDA', '#FFF3CD', '#F8D7DA']
    title_colors = ['#0033cc', '#006400', '#ffcc00', '#cc0000']
    
    bg_color = background_colors[level % len(background_colors)]
    title_color = title_colors[level % len(title_colors)]
    
    html = f'<ul style="background-color: {bg_color}; padding: 5px; list-style-type: none;">'
    files = []
    with os.scandir(dir_path) as entries:
        for entry in entries:
            if entry.is_dir() and entry.name != '.git':
                if not matches_ignore_patterns(entry.name, ignore_patterns):
                    subtree_html = generate_tree(entry.path, os.path.join(relative_path, entry.name), level + 1, search_query, ignore_patterns)
                    if subtree_html:
                        html += f'''
                        <li>
                            <details>
                                <summary style="color: {title_color}; font-weight: bold;" data-path="{escape(relative_path + entry.name)}">{escape(entry.name)}</summary>
                                {subtree_html}
                            </details>
                        </li>
                        '''
            elif entry.is_file():
                if not matches_ignore_patterns(entry.name, ignore_patterns):
                    file_relative_path = os.path.join(relative_path, entry.name)
                    file_link = f'{repo_url}{quote(file_relative_path.replace(os.path.sep, "/"))}'
                    if search_query is None or search_query.lower() in entry.name.lower():
                        files.append(f'''
                            <tr id="{escape(file_relative_path)}">
                                <td><a href="#{escape(file_relative_path)}">{escape(entry.name)}</a></td>
                                <td><button onclick="copyLink('{escape(file_link)}')">复制链接</button></td>
                                <td><button onclick="window.open('{escape(file_link)}')">打开链接</button></td>
                                <td><span>路径: {escape(file_relative_path)}</span></td>
                            </tr>
                        ''')
    
    if files:
        html += '<li><div style="width: 100%; overflow-x: auto;">'
        html += '<table border="1" cellpadding="5" cellspacing="0" style="width: 100%;">'
        html += '<tr><th>文件名</th><th>复制链接</th><th>打开链接</th><th>绝对路径</th></tr>'
        html += ''.join(files)
        html += '</table></div></li>'
    html += '</ul>'
    return html

def generate_html_tree(directory, html_file):
    ignore_patterns = read_gitignore(directory)
    
    tree_html = '''
    <html>
    <head>
        <title>Folder Tree</title>
        <style>
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
            li {
                margin: 0;
                padding: 0;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            table, th, td {
                border: 1px solid #ddd;
            }
            th, td {
                padding: 8px;
                text-align: left;
            }
            .container {
                display: flex;
                justify-content: space-between;
                height: 100vh;
            }
            .tree {
                width: 70%;
                overflow-y: auto;
            }
            .search-results {
                width: 30%;
                padding: 10px;
                border-left: 1px solid #ddd;
                overflow-y: auto;
            }
            .search-results input {
                width: 100%;
                padding: 8px;
                margin-bottom: 10px;
            }
            .search-results table {
                width: 100%;
                border-collapse: collapse;
            }
            .search-results table, th, td {
                border: 1px solid #ddd;
            }
            .search-results th, .search-results td {
                padding: 8px;
                text-align: left;
            }
            .file-path {
                font-size: 0.9em;
                color: #555;
            }
        </style>
        <script>
            function copyLink(link) {
                var tempInput = document.createElement('input');
                tempInput.value = link;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
              //  alert('链接已复制到剪贴板！');
            }

            function searchFiles() {
                var query = document.getElementById('searchInput').value.toLowerCase();
                var results = document.getElementById('searchResults');
                var tree = document.getElementById('tree');
                
                var items = tree.getElementsByTagName('summary');
                var searchResults = [];
                
                // Process files at the root level
                var rootFiles = tree.getElementsByTagName('tr');
                for (var i = 0; i < rootFiles.length; i++) {
                    var file = rootFiles[i].getElementsByTagName('a')[0];
                    if (file && file.innerText.toLowerCase().includes(query)) {
                        searchResults.push('<li>' + rootFiles[i].outerHTML + '</li>');
                    }
                }

                // Process directories
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.innerText.toLowerCase().includes(query)) {
                        item.parentElement.style.display = 'list-item';
                        searchResults.push('<li>' + item.parentElement.outerHTML + '</li>');
                    } else {
                        item.parentElement.style.display = 'none';
                    }
                }

                results.innerHTML = '<ul>' + searchResults.join('') + '</ul>';
            }
        </script>
    </head>
    <body>
        <div class="container">
            <div id="tree" class="tree">
                ''' + generate_tree(directory, '', 0, None, ignore_patterns) + '''
            </div>
            <div class="search-results">
                <input type="text" id="searchInput" placeholder="搜索..." onkeyup="searchFiles()" />
                <div id="searchResults"></div>
            </div>
        </div>
    </body>
    </html>
    '''
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(tree_html)

# 使用示例
script_dir = os.path.dirname(os.path.abspath(__file__))
output_file = os.path.join(script_dir, 'folder_tree.html')
generate_html_tree('./',output_file)
