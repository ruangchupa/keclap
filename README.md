# Keclap

Nebak kata siga Wordle tapi Basa Sunda.

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
$ docker build -t keclap:dev .
$ docker run -d -p 3000:3000 keclap:dev
```

buka [http://localhost:3000](http://localhost:3000) dina browser.

#### Production

```bash
$> docker build --target=prod -t game:prod .
$> docker run -d -p 80:80 game:prod
```

buka [http://localhost](http://localhost) dina browser.
