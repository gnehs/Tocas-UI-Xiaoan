#!/bin/sh
echo "－－－－－－－－－－－－－－－－－－－－－－－－"
echo "   Tocas Xiaoan Packer"
echo "   自動打包"
echo "－－－－－－－－－－－－－－－－－－－－－－－－"

read -p "⭐️ 輸入資料夾位置=> " videodir
if [ "$createsubfolder" ];then
	cd "$videodir"
else
    cd "/Volumes/Data/文件/GitHub/Tocas-UI-Xiaoan/"
fi
read -p "⭐️ 輸入版本號=> " version
tar -cvzf "TocasXiaoan_${version}.tar.gz" css fonts LICENSE scrollbar svg ts.xiaoan.min.js ts.xiaoan.min.css README.md