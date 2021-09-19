import React from 'react';
import styles from './summary.module.css'

const Summary = ({records ,dates}) => {

  console.log(dates);

  const total = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'])
  .map(record => Number(record['cost']));
  let totalCost = total.reduce((total, a) => total + a,0);
  totalCost = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  const max = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] !== '')
  .map(record => (record['cost']));
  let maxCost = max.sort((a, b) => b - a);
  maxCost = maxCost[0] && maxCost[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const foods = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'foods')
  .map(record => Number(record['cost']));
  let totalFoods = foods.reduce((foods, a) => foods + a,0);
  totalFoods = totalFoods.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const rent = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'rent')
  .map(record => Number(record['cost']));
  let totalRents = rent.reduce((rent, a) => rent + a,0);
  totalRents = totalRents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const daily = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'daily')
  .map(record => Number(record['cost']));
  let totalDaily = daily.reduce((daily, a) => daily + a,0);
  totalDaily = totalDaily.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const healthCulture = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'health/culture')
  .map(record => Number(record['cost']));
  let totalHealthCulture = healthCulture.reduce((healthCulture, a) => healthCulture + a,0);
  totalHealthCulture = totalHealthCulture.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const education = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'education')
  .map(record => Number(record['cost']));
  let totalEducation = education.reduce((education, a) => education + a,0);
  totalEducation = totalEducation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const transportation = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'transportation')
  .map(record => Number(record['cost']));
  let totalTransportation = transportation.reduce((transportation, a) => transportation + a,0);
  totalTransportation = totalTransportation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const installment = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'Installment')
  .map(record => Number(record['cost']));
  let totalInstallment = installment.reduce((installment, a) => installment + a,0);
  totalInstallment = totalInstallment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const etc = Object.keys(records)
  .map(key => records[key])
  .filter(record => record['category'] === 'etc')
  .map(record => Number(record['cost']));
  let totalEtc = etc.reduce((installment, a) => installment + a,0);
  totalEtc = totalEtc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  

  return (
    <div className={styles.summary}>
      {
        (dates['start'] === '' & dates['end'] === '') ? 
        <div className={styles.summaryLeft}>
          <h1>현재까지</h1><br/>
          <h1>지출</h1><br/>
          <h1>내역은</h1> 
        </div>
        : null
      }
      {
        (dates['start'] !== '' || dates['end'] !== '') ? 
        <div className={styles.summaryRight}>
          <h1>{dates['start']} 부터</h1><br/>
          <h1>{dates['end']}까지</h1><br/>
          <h1>지출 내역은</h1> 
        </div>
        : null
      }
      <br/>
      <div className={styles.detail}>  
        <span>식비 Total:</span>
        {
          Number(totalFoods) !== 0 &&
          <span>{totalFoods}원</span>
        }
        <br/>
        <span>주거비용 Total:</span>
        {
          Number(totalRents) !== 0 &&
          <span>{totalRents}원</span>
        }
        <br/>
        <span>생필품 Total:</span>
        {
          Number(totalDaily) !== 0 &&
          <span>{totalDaily}원</span>
        }
        <br/>
        <span>건강/문화 Total:</span>
        {
          Number(totalHealthCulture) !== 0 &&
          <span>{totalHealthCulture}원</span>
        }
        <br/>
        <span>교육비 Total:</span>
        {
          Number(totalEducation) !== 0 &&
          <span>{totalEducation}원</span>
        }
        <br/>
        <span>교통비 Total:</span>
        {
          Number(totalTransportation) !== 0 &&
          <span>{totalTransportation}원</span>
        }
        <br/>
        <span>할부 Total:</span>
        {
          Number(totalInstallment) !== 0 &&
          <span>{totalInstallment}원</span>
        }
        <br/>
        <span>기타 Total:</span>
        {
          Number(totalEtc) !== 0 &&
          <span>{totalEtc}원</span>
        }
        <br/>
        <span>총 지출: {totalCost}원</span>
        <br/>
        <span>가장 큰 지출: {maxCost}원</span>
        <br/>
      </div>  
    </div>
  );
};

export default Summary;