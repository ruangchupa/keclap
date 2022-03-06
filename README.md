# Keclap

Nebak kecap rahasia dina 6 kasempetan. Bakal aya kecap anyar tiap poe.

## Ngabuild jeung ngajalankeun di lokal
### Ngajalankeun di lokal:
Clone repositorina terus jalankeun command line ieu:

```bash
$ cd keclap
$ npm install
$ npm run start
```

### Ngabuild / jalankeun make Docker container :

#### Development

```bash
$ docker build -t keclap:dev -f docker/Dockerfile .
$ docker run -d -p 3000:3000 --name keclap-dev keclap:dev
```

buka [http://localhost:3000](http://localhost:3000) dina browser.

#### Production

```bash
$> docker build --target=prod -t keclap:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name keclap-prod keclap:prod
```

buka [http://localhost](http://localhost) dina browser.
