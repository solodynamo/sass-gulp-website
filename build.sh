#!/bin/bash

# logic reverser !

a=1
echo 'Do you have Ionic Installed[1/0]??'
 read answer
 if [ $answer != $a ]
 then
   npm install -g ionic@1.4.0
 else
   echo 'Great!! Do you also have gulp installed[1/0]??'
   read answer
   if [ $answer != $a ]
   then
   npm install -g gulp
   fi
 echo 'Starting the project ......'
 sudo ionic serve

 fi
