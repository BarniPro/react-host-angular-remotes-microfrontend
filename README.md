# Multiple Angular Microfrontends with React host 
Reproduction of a possbile webpack bug/issue, where remote chunks are loaded from a wrong url.

## How to reproduce
1. [Run all three applications](#how-to-run)
2. Open browser on [localhost:3000](http://localhost:3000)
3. Open console and see error

## How to run

### React host
```cd react-host && npm i && npm run start```

### Angular remote 1
```cd angular-remote-1 && npm i && ng serve```

### Angular remote 2
```cd angular-remote-2 && npm i && ng serve```
