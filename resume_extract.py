import re, pathlib
p = pathlib.Path("public/resume.pdf")
b = p.read_bytes()
strings = re.findall(rb'[\t -~]{5,}', b)
for s in strings[:400]:
    print(s.decode('latin1'))
