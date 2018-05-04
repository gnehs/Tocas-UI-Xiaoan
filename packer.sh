#!/bin/sh
echo "－－－－－－－－－－－－－－－－－－－－－－－－"
echo "   Tocas Xiaoan Packer"
echo "   自動打包"
echo "－－－－－－－－－－－－－－－－－－－－－－－－"

read -p "⭐️ 輸入資料夾位置=> " xiaoandir
read -p "⭐️ 輸入版本號=> " version

#確認資料夾路徑
if [ "$xiaoandir" ];then
	cd "$xiaoandir"
else
    cd "/Volumes/Data/文件/GitHub/Tocas-UI-Xiaoan/"
fi
#打包囉
tar -cvzf "TocasXiaoan_${version}.tar.gz" css fonts LICENSE scrollbar svg ts.xiaoan.min.js ts.xiaoan.min.css README.md

echo "🗃 打包完成"