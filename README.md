# 📝 yuru-resume
yuru-resume offers simple resume template made by react  
This guide in that document is based on the github page

## Sample
[Sample Page](https://lumyjuwon.github.io/yuru-resume/sample/)

## How to make my resume

1. **Fork** this project in the github  

2. Set this repository secret **GIT_TOKEN**  
[GIT_TOKEN Docs](https://github.com/lumyjuwon/yuru-resume/blob/master/docs/GIT_TOKEN.md)
   
3. Customize your resume  
[Customize Docs](https://github.com/lumyjuwon/yuru-resume/blob/master/docs/CUSTOMIZE.md)

4. Deploy the resume  
When finished customizing then go to actions and click **Run workflow** of Node.js CI

#### (Optional) Add langauge
- Create resume file and add the file in `yuru-resume/user/resume` directory  
  **MUST USE [ISO 639-1 Code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) and [Country Codes Alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)** for resume filename  
e.g.) `ko-KR.json`, `en-US.json`, `ja-JP.json`

## Todo
- Fix Converting pdf and png broken font in github action
- Implement converting date for each language notation
