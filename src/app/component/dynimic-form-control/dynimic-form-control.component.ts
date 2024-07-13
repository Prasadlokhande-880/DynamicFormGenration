import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'dynimic-form-control',
  templateUrl: './dynimic-form-control.component.html',
  styleUrls: ['./dynimic-form-control.component.css'],
})
export class DynimicFormControlComponent {
  userForm: any;
  firstInput: string = '';

  formJson ={
    "type": "group",
    "label": "Docker Host Monitoring Configuration",
    "name": "configurationTitle",
    "controls": [
      {
        "type": "list",
        "label": "Docker Host Details",
        "name": "HostsList",
        "controls": [
          {
            "type": "group",
            "label": null,
            "name": null,
            "controls": [
              {
                "type": "Enum",
                "label": "Monitoring mode",
                "name": "isSwarm",
                "value": "",
                "validators": []
              },
              {
                "type": "String",
                "label": "Host Name",
                "name": "hostName",
                "value": "",
                "validators": []
              },
              {
                "type": "String",
                "label": "Port Number",
                "name": "portNumber",
                "value": "",
                "validators": []
              },
              {
                "type": "Enum",
                "label": "Connection Protocol",
                "name": "protocol",
                "value": "",
                "validators": []
              },
              {
                "type": "String",
                "label": "Client Certificate File Path (.pfx)",
                "name": "clientCertPath",
                "value": "",
                "validators": []
              },
              {
                "type": "String",
                "label": "Client Certificate Password",
                "name": "clientCertPassword",
                "value": "",
                "validators": []
              },
              {
                "type": "group",
                "label": "Container Filtering Configuration",
                "name": "cntrFilters",
                "controls": [
                  {
                    "type": "String",
                    "label": "Container Name Filter",
                    "name": "cntrNameFilter",
                    "value": "",
                    "validators": []
                  },
                  {
                    "type": "Enum",
                    "label": "Container Name Filter Type",
                    "name": "cntrNameFilterType",
                    "value": "",
                    "validators": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "group",
        "label": "Administration",
        "name": "Administration",
        "controls": [
          {
            "type": "Boolean",
            "label": "Enable device mapping",
            "name": "i2dFlag",
            "value": "",
            "validators": []
          },
          {
            "type": "String",
            "label": "JAVA Home (1.8 or above)",
            "name": "java_home",
            "value": "",
            "validators": []
          },
          {
            "type": "Boolean",
            "label": "Enable Debug",
            "name": "DEBUG",
            "value": "",
            "validators": []
          },
          {
            "type": "String",
            "label": "Container Name Filter",
            "name": "cntrNameFilter",
            "value": "",
            "validators": []
          },
        ]
      }
    ]
  }


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({});
    this.buildForm(this.formJson.controls, this.userForm);
    console.log(this.userForm.value);

    // this.addDynamicInput('account_list', [
    //   {
    //     type: 'list',
    //     label: 'AWS Account Configuration',
    //     name: 'account_list',
    //     controls: [
    //       {
    //         type: 'group',
    //         label: 'AWS Monitoring Configuration',
    //         name: 'awsmonitorconf',
    //         controls: [
    //           {
    //             type: 'group',
    //             label: 'AWS Account Configuration',
    //             name: 'accountconf',
    //             controls: [
    //               {
    //                 type: 'String',
    //                 label: 'Account Name',
    //                 name: 'displayName',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Access Key',
    //                 name: 'AccessKey',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Secret Key',
    //                 name: 'SecretKey',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'AWS Organization Configuration',
    //                 name: 'orgConfig',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Organization Management Account',
    //                     name: 'isOrganization',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Assume Role Name',
    //                     name: 'AssumeRole',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Account Filter Configuration',
    //                     name: 'orgFilterConfig',
    //                     controls: [
    //                       {
    //                         type: 'Enum',
    //                         label: 'Account Filter Type',
    //                         name: 'AccountFilterFlag',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'String',
    //                         label: 'Accounts Filter',
    //                         name: 'AccountFilter',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Proxy Server Configuration',
    //                 name: 'proxyconf',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Use Proxy Configuration',
    //                     name: 'UseProxy',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Server Name',
    //                     name: 'ProxyServerName',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Port',
    //                     name: 'ProxyServerPort',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Proxy Server Authentication(Optional)',
    //                     name: 'proxycred',
    //                     controls: [
    //                       {
    //                         type: 'String',
    //                         label: 'Username',
    //                         name: 'ProxyUserName',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'String',
    //                         label: 'Password',
    //                         name: 'ProxyPassword',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label:
    //               'Select Services (EC2, EBS, ELB services monitored by default)',
    //             name: 'enabledServices',
    //             controls: [
    //               {
    //                 type: 'group',
    //                 label: 'Analytics',
    //                 name: 'analytics',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elasticsearch',
    //                     name: 'ESActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'EMR',
    //                     name: 'EMRActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kafka',
    //                     name: 'KafkaActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Analytics',
    //                     name: 'KinesisDataAnalyticsActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Firehose',
    //                     name: 'KinesisDataFirehoseActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Stream',
    //                     name: 'KinesisDataStreamActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Video Stream',
    //                     name: 'KinesisVideoStreamActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Redshift',
    //                     name: 'RedshiftActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Application Integration',
    //                 name: 'integration',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Notification Service (SNS)',
    //                     name: 'SNSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Queue Service (SQS)',
    //                     name: 'SQSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Compute',
    //                 name: 'compute',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'EC2, EBS, ELB',
    //                     name: 'Ec2ElbEbsActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Beanstalk',
    //                     name: 'BeanstalkActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Lambda',
    //                     name: 'LambdaActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Containers',
    //                 name: 'containers',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Container Registry',
    //                     name: 'ECRActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Container Service',
    //                     name: 'ECSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Kubernetes Service (EKS)',
    //                     name: 'EKSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Enable Container Insights Metrics',
    //                     name: 'ContainerInsights',
    //                     controls: [
    //                       {
    //                         type: 'Boolean',
    //                         label: 'Elastic Container Service (ECS)',
    //                         name: 'ECSContainerInsightsActive',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'Boolean',
    //                         label: 'Elastic Kubernetes Service (EKS)',
    //                         name: 'EKSContainerInsightsActive',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Databases',
    //                 name: 'databases',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'DocumentDB',
    //                     name: 'DocDBActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'DynamoDB',
    //                     name: 'DynamoDBActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'ElastiCache',
    //                     name: 'ECCActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Relational Database Service (RDS)',
    //                     name: 'RDSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Developer Tools',
    //                 name: 'developertools',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CodeBuild',
    //                     name: 'CodeBuildActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Internet of Things',
    //                 name: 'iot',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'IoT',
    //                     name: 'IOTActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Management and Governance',
    //                 name: 'management',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Auto Scaling',
    //                     name: 'AutoScalingActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'OpsWorks',
    //                     name: 'OpsWorksActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Networking and Content Delivery',
    //                 name: 'networking',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'API Gateway',
    //                     name: 'ApiGatewayActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CloudFront',
    //                     name: 'CloudFrontActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Route 53',
    //                     name: 'Route53Active',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Availability',
    //                     name: 'VPCActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Virtual Private Network (VPN)',
    //                     name: 'VPNActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Transit Gateway',
    //                     name: 'TransitGatewayActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Security, Identity, and Compliance',
    //                 name: 'security',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CloudHSM',
    //                     name: 'CloudHSMActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Web Application Firewall',
    //                     name: 'WAFActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Storage',
    //                 name: 'storage',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic File System',
    //                     name: 'EFSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Storage Service (S3)',
    //                     name: 'S3Active',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Storage Gateway',
    //                     name: 'SGActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Machine Learning',
    //                 name: 'machineLearning',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'AWS SageMaker',
    //                     name: 'SageMakerActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Custom Metric Configuration',
    //                 name: 'customconf',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Custom Metrics',
    //                     name: 'CustomMetricActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'list',
    //                     label: 'Custom Metric Configuration',
    //                     name: 'namespace_list',
    //                     controls: [
    //                       {
    //                         type: 'group',
    //                         label: 'Custom Metric Details',
    //                         name: 'awscustommetricconf',
    //                         controls: [
    //                           {
    //                             type: 'String',
    //                             label: 'Metric Configuration Label',
    //                             name: 'configLabel',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Namespace Name',
    //                             name: 'nsName',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Dimension Name',
    //                             name: 'dimName',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'Enum',
    //                             label: 'Statistics Type',
    //                             name: 'metricStat',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Period (Minutes)',
    //                             name: 'period',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Exclude Dimension (Instance) Filter',
    //                             name: 'exInstanceFilter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Exclude Metric Filter',
    //                             name: 'exMetricFilter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                         ],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label: 'Filter Configuration',
    //             name: 'filterconf',
    //             controls: [
    //               {
    //                 type: 'Enum',
    //                 label: 'Region Filter Type',
    //                 name: 'RegionFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Regions Filter',
    //                 name: 'RegionFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'EC2 Tag Filter Type',
    //                 name: 'TagFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'EC2 Tag Filter',
    //                 name: 'TagFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'Lambda Filter Type',
    //                 name: 'LambdaFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Lambda Filter',
    //                 name: 'LambdaFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Boolean',
    //                 label: 'Monitor Lambda Custom Metrics',
    //                 name: 'LambdaLogActive',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Filter Service Instances on Tags',
    //                 name: 'filterByTagServiceAS',
    //                 controls: [
    //                   {
    //                     type: 'list',
    //                     label: 'Filter Service Instances on Tags',
    //                     name: 'filterTagsList',
    //                     controls: [
    //                       {
    //                         type: 'group',
    //                         label: 'Filter Service Instances by Tag',
    //                         name: 'filterTagServiceDetails',
    //                         controls: [
    //                           {
    //                             type: 'Enum',
    //                             label: 'Service Tag Filter ',
    //                             name: 'filterService',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'Enum',
    //                             label: 'Filter Type',
    //                             name: 'filterType',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Tag Filter',
    //                             name: 'filter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                         ],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label: 'Administration',
    //             name: 'JavaAdministration',
    //             controls: [
    //               {
    //                 type: 'String',
    //                 label: 'JVM Arguments',
    //                 name: 'javaOpts',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Boolean',
    //                 label: 'Device Mapping',
    //                 name: 'i2d',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'Device Mapping Type',
    //                 name: 'i2dtype',
    //                 value: '',
    //                 validators: [],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Administration',
    //     name: 'miscellaneous',
    //     controls: [
    //       {
    //         type: 'String',
    //         label: 'Java Home',
    //         name: 'java_home',
    //         value: '',
    //         validators: [],
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Enable Debug',
    //     name: 'DebugAttrSet',
    //     controls: [
    //       {
    //         type: 'Boolean',
    //         label: 'Enable Debug',
    //         name: 'DEBUG',
    //         value: '',
    //         validators: [],
    //       },
    //     ],
    //   },
    // ]);

    // console.log('Dynamic list add ', this.userForm.value);

    // this.addDynamicInput(
    //   'account_list0/awsmonitorconf/filterconf/filterByTagServiceAS/filterTagsList',
    //   [
    //     {
    //       type: 'list',
    //       label: 'Filter Service Instances on Tags',
    //       name: 'filterTagsList',
    //       controls: [
    //         {
    //           type: 'group',
    //           label: 'Filter Service Instances by Tag',
    //           name: 'filterTagServiceDetails',
    //           controls: [
    //             {
    //               type: 'Enum',
    //               label: 'Service Tag Filter ',
    //               name: 'filterService',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'Enum',
    //               label: 'Filter Type',
    //               name: 'filterType',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'String',
    //               label: 'Tag Filter',
    //               name: 'filter',
    //               value: '',
    //               validators: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ]
    // );
    // console.log('Dynamic list add ', this.userForm.value);

    // this.addDynamicInput(
    //   'account_list0/awsmonitorconf/filterconf/filterByTagServiceAS/filterTagsList',
    //   [
    //     {
    //       type: 'list',
    //       label: 'Filter Service Instances on Tags',
    //       name: 'filterTagsList',
    //       controls: [
    //         {
    //           type: 'group',
    //           label: 'Filter Service Instances by Tag',
    //           name: 'filterTagServiceDetails',
    //           controls: [
    //             {
    //               type: 'Enum',
    //               label: 'Service Tag Filter ',
    //               name: 'filterService',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'Enum',
    //               label: 'Filter Type',
    //               name: 'filterType',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'String',
    //               label: 'Tag Filter',
    //               name: 'filter',
    //               value: '',
    //               validators: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ]
    // );

    // console.log('Dynamic list add ', this.userForm.value);

    // this.addDynamicInput('account_list', [
    //   {
    //     type: 'list',
    //     label: 'AWS Account Configuration',
    //     name: 'account_list',
    //     controls: [
    //       {
    //         type: 'group',
    //         label: 'AWS Monitoring Configuration',
    //         name: 'awsmonitorconf',
    //         controls: [
    //           {
    //             type: 'group',
    //             label: 'AWS Account Configuration',
    //             name: 'accountconf',
    //             controls: [
    //               {
    //                 type: 'String',
    //                 label: 'Account Name',
    //                 name: 'displayName',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Access Key',
    //                 name: 'AccessKey',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Secret Key',
    //                 name: 'SecretKey',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'AWS Organization Configuration',
    //                 name: 'orgConfig',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Organization Management Account',
    //                     name: 'isOrganization',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Assume Role Name',
    //                     name: 'AssumeRole',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Account Filter Configuration',
    //                     name: 'orgFilterConfig',
    //                     controls: [
    //                       {
    //                         type: 'Enum',
    //                         label: 'Account Filter Type',
    //                         name: 'AccountFilterFlag',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'String',
    //                         label: 'Accounts Filter',
    //                         name: 'AccountFilter',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Proxy Server Configuration',
    //                 name: 'proxyconf',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Use Proxy Configuration',
    //                     name: 'UseProxy',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Server Name',
    //                     name: 'ProxyServerName',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'String',
    //                     label: 'Port',
    //                     name: 'ProxyServerPort',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Proxy Server Authentication(Optional)',
    //                     name: 'proxycred',
    //                     controls: [
    //                       {
    //                         type: 'String',
    //                         label: 'Username',
    //                         name: 'ProxyUserName',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'String',
    //                         label: 'Password',
    //                         name: 'ProxyPassword',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label:
    //               'Select Services (EC2, EBS, ELB services monitored by default)',
    //             name: 'enabledServices',
    //             controls: [
    //               {
    //                 type: 'group',
    //                 label: 'Analytics',
    //                 name: 'analytics',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elasticsearch',
    //                     name: 'ESActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'EMR',
    //                     name: 'EMRActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kafka',
    //                     name: 'KafkaActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Analytics',
    //                     name: 'KinesisDataAnalyticsActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Firehose',
    //                     name: 'KinesisDataFirehoseActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Data Stream',
    //                     name: 'KinesisDataStreamActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Kinesis Video Stream',
    //                     name: 'KinesisVideoStreamActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Redshift',
    //                     name: 'RedshiftActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Application Integration',
    //                 name: 'integration',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Notification Service (SNS)',
    //                     name: 'SNSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Queue Service (SQS)',
    //                     name: 'SQSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Compute',
    //                 name: 'compute',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'EC2, EBS, ELB',
    //                     name: 'Ec2ElbEbsActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Beanstalk',
    //                     name: 'BeanstalkActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Lambda',
    //                     name: 'LambdaActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Containers',
    //                 name: 'containers',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Container Registry',
    //                     name: 'ECRActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Container Service',
    //                     name: 'ECSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic Kubernetes Service (EKS)',
    //                     name: 'EKSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'group',
    //                     label: 'Enable Container Insights Metrics',
    //                     name: 'ContainerInsights',
    //                     controls: [
    //                       {
    //                         type: 'Boolean',
    //                         label: 'Elastic Container Service (ECS)',
    //                         name: 'ECSContainerInsightsActive',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                       {
    //                         type: 'Boolean',
    //                         label: 'Elastic Kubernetes Service (EKS)',
    //                         name: 'EKSContainerInsightsActive',
    //                         value: '',
    //                         validators: [],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Databases',
    //                 name: 'databases',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'DocumentDB',
    //                     name: 'DocDBActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'DynamoDB',
    //                     name: 'DynamoDBActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'ElastiCache',
    //                     name: 'ECCActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Relational Database Service (RDS)',
    //                     name: 'RDSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Developer Tools',
    //                 name: 'developertools',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CodeBuild',
    //                     name: 'CodeBuildActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Internet of Things',
    //                 name: 'iot',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'IoT',
    //                     name: 'IOTActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Management and Governance',
    //                 name: 'management',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Auto Scaling',
    //                     name: 'AutoScalingActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'OpsWorks',
    //                     name: 'OpsWorksActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Networking and Content Delivery',
    //                 name: 'networking',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'API Gateway',
    //                     name: 'ApiGatewayActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CloudFront',
    //                     name: 'CloudFrontActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Route 53',
    //                     name: 'Route53Active',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Availability',
    //                     name: 'VPCActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Virtual Private Network (VPN)',
    //                     name: 'VPNActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'VPC Transit Gateway',
    //                     name: 'TransitGatewayActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Security, Identity, and Compliance',
    //                 name: 'security',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'CloudHSM',
    //                     name: 'CloudHSMActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Web Application Firewall',
    //                     name: 'WAFActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Storage',
    //                 name: 'storage',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Elastic File System',
    //                     name: 'EFSActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Simple Storage Service (S3)',
    //                     name: 'S3Active',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Storage Gateway',
    //                     name: 'SGActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Machine Learning',
    //                 name: 'machineLearning',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'AWS SageMaker',
    //                     name: 'SageMakerActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                 ],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Custom Metric Configuration',
    //                 name: 'customconf',
    //                 controls: [
    //                   {
    //                     type: 'Boolean',
    //                     label: 'Custom Metrics',
    //                     name: 'CustomMetricActive',
    //                     value: '',
    //                     validators: [],
    //                   },
    //                   {
    //                     type: 'list',
    //                     label: 'Custom Metric Configuration',
    //                     name: 'namespace_list',
    //                     controls: [
    //                       {
    //                         type: 'group',
    //                         label: 'Custom Metric Details',
    //                         name: 'awscustommetricconf',
    //                         controls: [
    //                           {
    //                             type: 'String',
    //                             label: 'Metric Configuration Label',
    //                             name: 'configLabel',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Namespace Name',
    //                             name: 'nsName',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Dimension Name',
    //                             name: 'dimName',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'Enum',
    //                             label: 'Statistics Type',
    //                             name: 'metricStat',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Period (Minutes)',
    //                             name: 'period',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Exclude Dimension (Instance) Filter',
    //                             name: 'exInstanceFilter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Exclude Metric Filter',
    //                             name: 'exMetricFilter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                         ],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label: 'Filter Configuration',
    //             name: 'filterconf',
    //             controls: [
    //               {
    //                 type: 'Enum',
    //                 label: 'Region Filter Type',
    //                 name: 'RegionFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Regions Filter',
    //                 name: 'RegionFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'EC2 Tag Filter Type',
    //                 name: 'TagFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'EC2 Tag Filter',
    //                 name: 'TagFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'Lambda Filter Type',
    //                 name: 'LambdaFilterFlag',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'String',
    //                 label: 'Lambda Filter',
    //                 name: 'LambdaFilter',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Boolean',
    //                 label: 'Monitor Lambda Custom Metrics',
    //                 name: 'LambdaLogActive',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'group',
    //                 label: 'Filter Service Instances on Tags',
    //                 name: 'filterByTagServiceAS',
    //                 controls: [
    //                   {
    //                     type: 'list',
    //                     label: 'Filter Service Instances on Tags',
    //                     name: 'filterTagsList',
    //                     controls: [
    //                       {
    //                         type: 'group',
    //                         label: 'Filter Service Instances by Tag',
    //                         name: 'filterTagServiceDetails',
    //                         controls: [
    //                           {
    //                             type: 'Enum',
    //                             label: 'Service Tag Filter ',
    //                             name: 'filterService',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'Enum',
    //                             label: 'Filter Type',
    //                             name: 'filterType',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                           {
    //                             type: 'String',
    //                             label: 'Tag Filter',
    //                             name: 'filter',
    //                             value: '',
    //                             validators: [],
    //                           },
    //                         ],
    //                       },
    //                     ],
    //                   },
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             type: 'group',
    //             label: 'Administration',
    //             name: 'JavaAdministration',
    //             controls: [
    //               {
    //                 type: 'String',
    //                 label: 'JVM Arguments',
    //                 name: 'javaOpts',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Boolean',
    //                 label: 'Device Mapping',
    //                 name: 'i2d',
    //                 value: '',
    //                 validators: [],
    //               },
    //               {
    //                 type: 'Enum',
    //                 label: 'Device Mapping Type',
    //                 name: 'i2dtype',
    //                 value: '',
    //                 validators: [],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Administration',
    //     name: 'miscellaneous',
    //     controls: [
    //       {
    //         type: 'String',
    //         label: 'Java Home',
    //         name: 'java_home',
    //         value: '',
    //         validators: [],
    //       },
    //     ],
    //   },
    //   {
    //     type: 'group',
    //     label: 'Enable Debug',
    //     name: 'DebugAttrSet',
    //     controls: [
    //       {
    //         type: 'Boolean',
    //         label: 'Enable Debug',
    //         name: 'DEBUG',
    //         value: '',
    //         validators: [],
    //       },
    //     ],
    //   },
    // ]);

    // console.log('Dynamic list add ', this.userForm.value);

    // this.addDynamicInput(
    //   'account_list1/awsmonitorconf/filterconf/filterByTagServiceAS/filterTagsList',
    //   [
    //     {
    //       type: 'list',
    //       label: 'Filter Service Instances on Tags',
    //       name: 'filterTagsList',
    //       controls: [
    //         {
    //           type: 'group',
    //           label: 'Filter Service Instances by Tag',
    //           name: 'filterTagServiceDetails',
    //           controls: [
    //             {
    //               type: 'Enum',
    //               label: 'Service Tag Filter ',
    //               name: 'filterService',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'Enum',
    //               label: 'Filter Type',
    //               name: 'filterType',
    //               value: '',
    //               validators: [],
    //             },
    //             {
    //               type: 'String',
    //               label: 'Tag Filter',
    //               name: 'filter',
    //               value: '',
    //               validators: [],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ]
    // );

    // console.log('Dynamic list add ', this.userForm.value);

    // this.removeDynamicInput("account_list1/awsmonitorconf/filterconf/filterByTagServiceAS/filterTagsList",0);

    // console.log("Dynamic list remove", this.userForm.value);

    // this.removeDynamicInput("account_list",1);

    // console.log("Dynamic list remove", this.userForm.value);

  //   console.log(
  //     'getdata for the list:',
  //     this.getDynamicList(
  //       'account_list1/awsmonitorconf/filterconf/filterByTagServiceAS/filterTagsList0'
  //     )
  //   );

  //   console.log('getdata for the list:', this.getDynamicList('account_list1'));
  //
  }

  buildForm(controls: any[], formGroup: FormGroup): void {
    controls.forEach((control) => {
      if (control.type === 'group') {
        const subgroup = this.fb.group({});
        this.buildForm(control.controls, subgroup);
        formGroup.addControl(control.name, subgroup);
      } else if (control.type === 'list') {
        const formArray = this.fb.array([]);
        formGroup.addControl(control.name, formArray);
      } else {
        const validators = this.mapValidators(control.validators);
        const formControl = new FormControl(control.value || '', validators);
        formGroup.addControl(control.name, formControl);
      }
    });
  }

  mapValidators(validators: string[]): any[] {
    const formValidators: any[] = [];
    if (validators) {
      validators.forEach((validator) => {
        if (validator === 'required') {
          formValidators.push(Validators.required);
        } else if (validator === 'email') {
          formValidators.push(Validators.email);
        } else if (validator.startsWith('pattern:')) {
          const pattern = validator.split(':')[1];
          formValidators.push(Validators.pattern(pattern));
        }
      });
    }
    return formValidators;
  }

  addDynamicInput(listName: string, controls: any[]): void {
    const myArray = listName.split('/');

    if (myArray.length === 1) {
      if (this.userForm.get(listName)) {
        const formArray = this.userForm.get(listName) as FormArray;
        const newGroup = this.fb.group({});
        this.buildForm(controls[0].controls, newGroup);
        formArray.push(newGroup);
      }
    } else {
      let fromElement: any = this.userForm;

      myArray.forEach((element, index) => {
        if (/\d+$/.test(element)) {
          const matchResult = element.match(/\d+$/);
          if (matchResult) {
            const numberIndex = matchResult[0];
            const arrayName = element.replace(/\d+$/, '');

            const formArray = fromElement.get(arrayName) as FormArray;
            if (formArray) {
              fromElement = formArray.at(Number(numberIndex)) as FormGroup;
            } else {
              console.error(`Form array ${arrayName} not found.`);
              return; // or handle the error appropriately
            }
          } else {
            console.error(`Invalid element format: ${element}`);
            return; // or handle the error appropriately
          }
        } else {
          if (fromElement instanceof FormGroup) {
            const nextElement = fromElement.get(element);
            if (nextElement instanceof FormGroup) {
              fromElement = nextElement;
            } else {
              console.error(
                `Expected FormGroup but got ${typeof nextElement}.`
              );
              return; // or handle the error appropriately
            }
          } else {
            console.error(`Expected FormGroup but got ${typeof fromElement}.`);
            return; // or handle the error appropriately
          }
        }
      });

      if (fromElement instanceof FormArray) {
        const newGroup = this.fb.group({});
        this.buildForm(controls[0].controls, newGroup);
        fromElement.push(newGroup);
      } else {
        console.error(`Expected FormArray but got ${typeof fromElement}.`);
        // Handle the error appropriately
      }
    }
  }

  removeDynamicInput(listName: string, index: number): void {
    const myArray = listName.split('/');

    if (myArray.length === 1) {
      if (this.userForm.get(listName)) {
        const formArray = this.userForm.get(listName) as FormArray;
        formArray.removeAt(index);
      }
    } else {
      let fromElement: any = this.userForm;

      myArray.forEach((element, i) => {
        if (/\d+$/.test(element)) {
          const matchResult = element.match(/\d+$/);
          if (matchResult) {
            const numberIndex = matchResult[0];
            const arrayName = element.replace(/\d+$/, '');

            const formArray = fromElement.get(arrayName) as FormArray;
            if (formArray) {
              fromElement = formArray.at(Number(numberIndex)) as FormGroup;
            }
          } else {
            console.error(`Invalid element format: ${element}`);
          }
        } else {
          if (fromElement instanceof FormGroup) {
            fromElement = fromElement.get(element) as FormGroup;
          }
        }
      });

      if (fromElement instanceof FormArray) {
        fromElement.removeAt(index);
      }
    }
  }

  getDynamicList(listName: string): any {
    const myArray = listName.split('/');

    let fromElement: any = this.userForm;

    for (let i = 0; i < myArray.length; i++) {
      const element = myArray[i];

      if (/\d+$/.test(element)) {
        const matchResult = element.match(/\d+$/);
        if (matchResult) {
          const numberIndex = matchResult[0];
          const arrayName = element.replace(/\d+$/, '');

          const formArray = fromElement.get(arrayName) as FormArray;
          if (formArray) {
            if (i === myArray.length - 1) {
              return formArray.at(Number(numberIndex)); // Return the form group at the index
            } else {
              fromElement = formArray.at(Number(numberIndex)) as FormGroup;
            }
          } else {
            console.error(`Form array ${arrayName} not found.`);
            return null;
          }
        } else {
          console.error(`Invalid element format: ${element}`);
          return null;
        }
      } else {
        if (fromElement instanceof FormGroup) {
          const nextElement = fromElement.get(element);
          if (nextElement) {
            if (i === myArray.length - 1) {
              return nextElement; // Return the form array or group
            } else {
              fromElement = nextElement as FormGroup;
            }
          } else {
            console.error(`Form group ${element} not found.`);
            return null;
          }
        } else {
          console.error(`Expected FormGroup but got ${typeof fromElement}.`);
          return null;
        }
      }
    }

    return fromElement;
  }
}
