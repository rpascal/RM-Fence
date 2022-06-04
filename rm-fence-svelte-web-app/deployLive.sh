
echo "Building"
npm run build

echo "Removing Old files"
aws s3 rm s3://jookwebapp/ --recursive

echo "Sycning new files"
aws s3 sync ./build s3://jookwebapp/

echo "Invalidating cloudfront distribution (jookwebapp)"
aws cloudfront create-invalidation --distribution-id E3FNPSHR8VBTA8 --paths '/*'

#  TODO read previous response to get the id of the invalidation and poll
# aws cloudfront wait invalidation-completed --distribution-id E1F235GHIJKLM7 --id I3UQXMDE3XDWF6

echo "Done"