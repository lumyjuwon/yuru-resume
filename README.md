# lumy-resume
lumy-resume offers simple resume template made by react  
the guide in that document is based on the github page

## Sample
[Sample Page](https://lumyjuwon.github.io/lumy-resume/sample/)

## How to make my resume

1. **fork** this project in the github  

2. set this repository secret **GIT_TOKEN**  
[GIT_TOKEN Docs](https://github.com/lumyjuwon/lumy-resume/blob/master/docs/GIT_TOKEN.md)
   
1. customize your resume  
[Customize Docs](https://github.com/lumyjuwon/lumy-resume/blob/master/docs/CUSTOMIZE.md)

1. deploy the resume  
When finished customizing then go to actions and click **Run workflow** of Node.js CI

#### (Optional) Add langauge
- Write resume in `lumy-resume/user/resume` directory
- **MUST USE ISO 639-1 Code and Country Codes Alpha-2** for resume filename  
e.g.) `ko-KR.json`, `en-US.json`, `ja-JP.json`

## Todo
- Fix Converting pdf and png broken font in github action
- Implement converting date for each language notation
