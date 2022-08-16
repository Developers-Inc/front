- npx create-react-app my-app --template typescript
- Format on save
- Formatter: Prettier
- npx husky-init
- yarn add lint-staged eslint prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-prettier eslint-config-prettier eslint-plugin-jest-dom --dev

- docker build -t developersinc-back .
- docker run -d --name back -p 8080:8080 developersinc-back

- docker build -t developersinc-front .
- docker run -d --name front -p 3000:3000 developersinc-front

https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html
access key: AKIASMIG6BFAMJ55SOL4
secret: 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
aws configure

View push commands

- Create new cluster
  - Name: DevelopersIncCluster
- Create a task definition
  - Name: DevelopersIncTaskDefinition
  - Task memory: 0.5GB
  - Task CPU: 0.25 vCPU
  - Add container
    - Name: DevelopersIncContainerBack
    - Image: uri
    - Port mappings: 8080
  - Add container
    - Name: DevelopersIncContainerFront
    - Image: uri
    - Port mappings: 3000
- Create new security group (EC2\_: DevelopersIncSecurityGroup
  - All traffic, anywhere IPV6 and IPV4 - inbound e outbound
- Create new service inside the cluster
  - Fargate, Linux
  - Task Definition: DevelopersIncTaskDefinition
  - Name: DevelopersIncService
  - Number of tasks: 1
    Espera bastante
    Pega public ip do back, :8080
    Front não vai funcionar

Muda o front, docker build, docker push

New task definition revision: adiciona o latest no back e no front
Update service
