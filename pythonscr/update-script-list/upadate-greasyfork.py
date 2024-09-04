import requests
import json
from datetime import datetime, timedelta

# Function to convert UTC to Beijing Time (UTC+8)
def convert_to_beijing_time(utc_time):
    utc_dt = datetime.strptime(utc_time, "%Y-%m-%dT%H:%M:%S.%fZ")
    beijing_dt = utc_dt + timedelta(hours=8)
    return beijing_dt.strftime("%Y-%m-%d %H:%M:%S")

# Fetch data from the GreasyFork JSON URL
url = "https://greasyfork.org/zh-CN/users/1169082-%E4%BA%BA%E6%B0%91%E7%9A%84%E5%8B%A4%E5%8A%A1%E5%91%98.json"
response = requests.get(url)

if response.status_code == 200:
    greasyfork_data = response.json()  # Get the GreasyFork data
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
    exit()

# Load your local JSON data (C:\Github\Local Dev\ScriptsPath.json)
with open('docs/ScriptsPath.json', "r+", encoding="utf-8") as f:
    local_data = json.load(f)

    # Iterate through each script in the GreasyFork data
    for script in greasyfork_data["scripts"]:
        script_id = str(script["id"])
        created_at_beijing = convert_to_beijing_time(script["created_at"])
        code_updated_at_beijing = convert_to_beijing_time(script["code_updated_at"])
        version = script["version"]

        # Find matching script by GreasyFork id and add the created_at, code_updated_at, and version fields
        for local_script in local_data["scripts"]:
            if local_script.get("GreasyFork") == script_id:
                local_script["created_at"] = created_at_beijing
                local_script["code_updated_at"] = code_updated_at_beijing
                local_script["version"] = version

    # Save the updated local JSON file
    f.seek(0)
    json.dump(local_data, f, ensure_ascii=False, indent=4)
    f.truncate()

print("Updated local JSON data with created_at, code_updated_at, and version successfully.")
