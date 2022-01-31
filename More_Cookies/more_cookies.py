import base64
import requests

URL = "http://mercury.picoctf.net:43275/"


def main():
  response = requests.get(URL, allow_redirects=False)
  original_auth_name = base64.b64decode(response.cookies['auth_name'])
  for byte in range(len(original_auth_name)):
    for bit in range(original_auth_name[0].bit_length()):
      auth_name = original_auth_name[:byte] + bytes(
          [original_auth_name[byte] ^ (1 << bit)]) + original_auth_name[byte + 1:]
      response = requests.get(URL, cookies=dict(
          auth_name=base64.b64encode(auth_name).decode('utf-8')))
      if "picoCTF" in response.text:
        print(response.text)
        return


if __name__ == "__main__":
  main()
