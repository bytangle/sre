# SRE Questions

- Setup dockerfile to run the server
- Add a test workflow file to execute the test whenever there's a merge with main

- Explain how you'd setup this server to deploy it to AWS ECS cluster

- How do u connect API gateway with aws lambda function?


- The project is was once zipped and already deployed on lambda functions
- complete the deploy-to-lambda-function.yml to deploy this deployment.zip to lambda function (an update) anytime there's merge with main branch (check below the function details)

### Function Details:
- ARN: arn:aws:lambda:us-east-1:090086540669:function:sre-metrics
- Name: sre-metrics
- Function URL: https://bsjdzw62gvrpgxdr5mm2r3jjqq0sffvx.lambda-url.us-east-1.on.aws/sre-metrics