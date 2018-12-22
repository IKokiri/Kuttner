ionic cordova plugin add cordova-plugin-console
ionic cordova plugin rm cordova-plugin-console
ionic cordova build --release android
/usr/local/java/jdk1.8.0_191/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key1.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
/root/Android/Sdk/build-tools/28.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Kuttner.apk
