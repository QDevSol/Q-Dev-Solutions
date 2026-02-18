
$readmePath = "README.md"
if (Test-Path $readmePath) {
    Add-Content -Path $readmePath -Value "`n# Q-Dev-Solutions"
} else {
    Set-Content -Path $readmePath -Value "# Q-Dev-Solutions"
}

git init
git add .
git commit -m "first commit"
git branch -M master
if ((git remote) -contains "origin") {
    git remote remove origin
}
git remote add origin https://github.com/Konainejaz/Q-Dev-Solutions.git
git push -u origin master
