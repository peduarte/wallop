git add .
git commit -am "Adding new files before"
git pull origin master
git push origin master
git checkout gh-pages
git merge master
git pull origin gh-pages
git push origin gh-pages
git checkout master
