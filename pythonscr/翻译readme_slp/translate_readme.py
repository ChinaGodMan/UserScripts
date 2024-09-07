# 翻译特定语言的函数（并行处理每种语言）
def translate_language(lines, chinese_texts, lang, foldpath, translatefile):
    translations = {}  # 每种语言有自己的翻译结果
    threads = []
    chunk_size = len(chinese_texts) // 5 or 1  # 假设5个线程，按块划分
    for i in range(0, len(chinese_texts), chunk_size):
        chunk = chinese_texts[i:i + chunk_size]
        thread = threading.Thread(target=translate_worker, args=(chunk, translations, lang))
        threads.append(thread)
        thread.start()

    # 等待所有线程完成
    for thread in threads:
        thread.join()

    # 从后往前替换中文文本
    new_lines = lines[:]
    for line_number, chinese_text, translated_text in reversed(
            [(ln, ct, translations.get((ln, ct), None)) for ln, ct in chinese_texts if (ln, ct) in translations]):
        new_lines[line_number] = new_lines[line_number].replace(chinese_text, translated_text, 1)

    # 设置保存路径：如果 foldpath 为空，使用 translatefile 的路径
    if not foldpath:
        output_dir = os.path.dirname(translatefile)
    else:
        output_dir = os.path.join(foldpath, 'docs')
    
    # 创建保存目录（如果不存在）
    os.makedirs(output_dir, exist_ok=True)
    
    # 保存翻译后的文件
    output_path = os.path.join(output_dir, f'README_{lang}.md')
    with open(output_path, 'w', encoding='utf-8') as f_out:
        f_out.writelines(new_lines)
    print(f"翻译完成，已将 {lang} 语言的结果写入 '{output_path}'。")


# 主函数
def translate_readme(data, json_data):
    blacklist = ["人民的勤务员", "中文简体", "中文繁体"]

    for item in data['translatelist']:
        if not item.get('translated', False):
            print(f"条目 {item['foldpath']} 的 translated 为 false，跳过翻译。")
            continue

        foldpath = item['foldpath']
        translatefile = item['translatefile']
        translatedto = item['translatedto']
        readme_path = os.path.join(foldpath, translatefile) if foldpath else translatefile

        if not os.path.exists(readme_path):
            print(f'文件 {readme_path} 不存在，跳过翻译。')
            continue

        # 读取文件内容
        lines = read_file_to_memory(readme_path, json_data)

        # 保存中文文本的位置信息
        chinese_texts = []
        for line_number, line in enumerate(lines):
            for match in chinese_pattern.finditer(line):
                chinese_text = match.group()
                if chinese_text not in blacklist:
                    chinese_texts.append((line_number, chinese_text))

        # 为每种语言启动一个线程并行翻译
        language_threads = []
        for lang in translatedto:
            thread = threading.Thread(target=translate_language, args=(lines, chinese_texts, lang, foldpath, translatefile))
            language_threads.append(thread)
            thread.start()

        # 等待所有语言线程完成
        for thread in language_threads:
            thread.join()

