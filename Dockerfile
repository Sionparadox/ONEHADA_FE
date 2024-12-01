# Node.js 이미지 기반으로 설정
FROM node:20-alpine

# 컨테이너 내 작업 디렉토리 생성
WORKDIR /app

# package.json과 package-lock.json 파일을 컨테이너로 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 빌드 (필요한 경우)
RUN npm run build

# 애플리케이션 실행
CMD ["npm", "start"]

