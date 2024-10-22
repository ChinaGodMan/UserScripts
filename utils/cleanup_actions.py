import os
import requests
# 从环境变量中获取 GitHub 个人访问令牌和仓库信息
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
REPO_OWNER = os.getenv("REPO_OWNER")
REPO_NAME = os.getenv("REPO_NAME")
# GitHub API 基础 URL
BASE_URL = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/actions/runs"
# 添加 Authorization 头部
headers = {"Authorization": f"token {GITHUB_TOKEN}", "Accept": "application/vnd.github.v3+json"}


# 获取所有 Actions 运行记录
def get_all_workflow_runs():
    runs = []
    page = 1
    while True:
        response = requests.get(f"{BASE_URL}?page={page}", headers=headers)
        if response.status_code != 200:
            print(f"Error fetching runs: {response.status_code}")
            break
        data = response.json()
        runs.extend(data["workflow_runs"])
        if "next" not in response.links:
            break
        page += 1
    return runs


# 删除指定的运行记录
def delete_workflow_run(run_id):
    delete_url = f"{BASE_URL}/{run_id}"
    response = requests.delete(delete_url, headers=headers)
    if response.status_code == 204:
        print(f"Successfully deleted run {run_id}")
    else:
        print(f"Failed to delete run {run_id}: {response.status_code}, {response.text}")


# 主函数，获取并删除所有运行记录
def main():
    runs = get_all_workflow_runs()
    if not runs:
        print("No workflow runs found.")
        return
    print(f"Found {len(runs)} workflow runs. Deleting them now...")
    for run in runs:
        delete_workflow_run(run["id"])


if __name__ == "__main__":
    main()
