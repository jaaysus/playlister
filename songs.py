import urllib.parse
import json

input_file = "results.txt"
output_file = "data.js"

data = []

with open(input_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

for line in lines:
    q = line.strip()
    if not q:
        continue

    search_query = q + " official audio"
    url = "https://www.youtube.com/results?search_query=" + urllib.parse.quote(search_query)

    data.append({
        "title": q,
        "query": search_query,
        "url": url
    })

with open(output_file, "w", encoding="utf-8") as f:
    f.write("const songs = ")
    f.write(json.dumps(data, ensure_ascii=False, indent=2))
    f.write(";\n\nexport default songs;\n")

print("Done → youtube_search_links.js")