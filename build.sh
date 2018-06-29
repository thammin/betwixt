#!/bin/bash

# clean up after last build
rm -rf build/
rm -rf bin/

mkdir build/
mkdir bin/

# move files required by production app to the /build folder
cp -r src/ build/src/
cp -r gfx/ build/gfx/
cp package.json build/

# install all dependencies
cd build/
npm i --production
cd ..

# build packages for my own OS version only
electron-packager ./build/ Betwixt --out ./bin/ --electron-version=0.36.12 --icon=./gfx/icon

# pack
cd ./bin/Betwixt-darwin-x64/
zip -r ../Betwixt-darwin-x64 *
