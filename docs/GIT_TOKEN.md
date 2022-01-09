## Create Personal Access Token
1. Move to https://github.com/settings/tokens
2. Click **Generate new token** button
3. Set **Expiration** to `No expiration` (Recommend)
4. Select scopes as follow as:  
```
repo  
　repo:status ✅  
　repo_deployment ✅  
　public_repo ✅  
　security_events ✅  

admin:repo_hook  
　write:repo_hook ✅  
　read:repo_hook ✅  
```
5. Copy generated token

## Create Repository Secret
1. Move to the forked resume repository in browser
2. Move to **Settings > Secrets**  
3. Click **New Repository secret** button
4. Must Set name as "**GIT_TOKEN**" and patse the copied generated token  
   
🎉Congratulations setting is complete !🎉  
[Next Docs](https://github.com/lumyjuwon/yuru-resume/blob/master/docs/CUSTOMIZE.md)(customize resume)
