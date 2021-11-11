# Customize
in `yuru-resume/user` folder you can customize your resume with json file.

## user > page.json
Set your resume info  

```
"title": Tab title  
"description": Page description
```

## user > setting.json
Set your resume page path. for example, when pagePath "sample" then the other path must be start with "sample"   
```　  
"build": {  
　　"pagePath": "/sample"    
　　"htmlPath": "/sample/index.html"  
},  
"pdf": {  
　　"outputPath": "/sample/files",  
　　"format": "a2"  
},  
"image": {  
　　"outputPath": "/sample/files"  
}
```