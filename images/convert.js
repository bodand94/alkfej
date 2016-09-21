"use strict";

const fs=require('fs');
const jimp=require('jimp');
const DataStore=require('nedb');

const db=new DataStore({
    filename: 'images.nedb',
    autoload: true,
});

fs.readdir('gyak02/imagines/', function (err, files) {
    if (err) throw err;
    files.forEach(function (fileName){
       jimp.read('gyak02/imagines/${fileName}', function (err, image) {
           const {width, height}=image.bitmap;
           db.insert({fileName, width, height}, function (err, insertedImage){
               console.log(insertedImage);
           });
       })
    })
});