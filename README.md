# SRE Questions

- Add github action workflow so that when a push is made to main branch, it automatically zips and deploy the code to lambda function on aws
- Setup AWS gateway with the lambda function so we can serve the lambda function via the API gateway

### Function Details:
- ARN: arn:aws:lambda:us-east-1:090086540669:function:sre-metrics
- Name: sre-metrics
- Function URL: https://bsjdzw62gvrpgxdr5mm2r3jjqq0sffvx.lambda-url.us-east-1.on.aws/sre-metrics