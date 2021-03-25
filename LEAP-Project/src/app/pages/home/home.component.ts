import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  dataMapping: any = {
    Banking: ['Fraud Prevention'],
    'Customer Analytics': ['Customer Analytics'],
    Manufacturing: ['Demand Forecasting'],
    'Health Care': ['Insurance'],
    Retail: ['Demand Forecasting'],
  };

  solutionsData: any = [
    {
      solution_title: 'Fraud Prevention',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Insurance companies lose an estimated US$30 billion a year to fraudulent claims. Machine learning helps them identify potential fraudulent claims faster and more accurately, and flag them for investigation. Machine learning algorithms are superior to traditional predictive...',
      page_name: 'fraudPrevention',
      img_name: 'banking-sector.jpg',
      'col-width': 25,
    },
    {
      solution_title: 'Customer Analytics',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Customer Analytics for Growth Using Machine Learning, AI, and Big Data will give you the discipline for and understanding of how to leverage your data to transform existing business strategies and level the playing field for firms that were just beginning...',
      page_name: 'customerAnalytics',
      img_name: 'data-science-trends-for-retail.jpg',
      'col-width': 25,
    },
    {
      solution_title: 'Demand Forecasting',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'More accurate prediction of the demand for fast-moving consumer goods is a competitive factor for manufacturers and retailers, especially in the fashion, technology and fresh food sectors. This exploratory research presents the benefits of Machine Learning...',
      page_name: 'demandForecasting',
      img_name: 'ecm_manufacturing.jpg',
      'col-width': 50,
    },
    {
      solution_title: 'Insurance',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Machine learning is extensively used across the insurance value chain. Machines will play a significant role in customer service, from managing the initial interaction to determining which cover a customer requires. Accordingto a recent survey , a majority of consumers...',
      page_name: 'insurance',
      img_name: 'sfs-healthcare-finance-visual.jpg',
    },
    {
      solution_title: 'Application Score Card',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Today’s bank lending process is characterised by uncertainty and volatility. we help banks quantify their risks. We see credit scoring as a vital risk management tool, revealing untapped opportunities to create a healthy loan portfolio A credit score is a numeric value...',
      page_name: 'applicationScoreCard',
      img_name: 'digital-retail.jpg',
    },
    {
      solution_title: 'Market Mix Modelling',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Market Mix Modelling (MMM) is a technique which helps in quantifying the impact of several marketing inputs on sales or Market Share. The purpose of using MMM is to understand how much each marketing input contributes to sales, and how much...',
      page_name: 'marketMixModelling',
      img_name: 'shutterstock_1326553091.jpg',
    },
    {
      solution_title: 'Supply Chain',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Integrating machine learning in supply chain management can help automate a number of mundane tasks and allow the enterprises to focus on more strategic and impactful business activities. Using intelligent machine learning software, supply chain managers...',
      page_name: 'supplyChain',
      img_name: 'shutterstock_1348457054.jpg',
    },
    {
      solution_title: 'Human Resources',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'Human resources has been slower to come to the table with machine learning and artificial intelligence than other fields—marketing, communications, even health care.But the value of machine learning in human resources can now be measured thanks to advances...',
      page_name: 'humanResources',
      img_name: 'humen.jpeg',
    },
    {
      solution_title: 'Manufacturing',
      // tslint:disable-next-line:max-line-length
      solution_text:
        'It’s a timeless manufactuing goal: producing more, higher-quality products at minimum cost.The “Smart Manufacturing” revolution is already enabling manufacturers to reach this goal more successfully than ever — and one of the core technologies driving this new wave...',
      page_name: 'manufacturing',
      img_name: 'AdobeStock_167075320.jpg',
    },
  ];
  images = [
    { path: '../../assets/sample/1.jpg' },
    { path: '../../assets/sample/2.jpg' },
    { path: '../../assets/sample/3.jpg' },
  ];
  public itemsPerPage = 3;
  public currentPage = 1;
  public totalItems = this.solutionsData.length;

  ngOnInit(): void {}
}
