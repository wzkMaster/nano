import LocTable from '@/components/LocTable';
import HomeLayout from '@/layouts/HomeLayout';
import Detail from '@/components/Detail';
import React from 'react';
import style from './index.less';

interface locData{
  id: number,
  name: string,
  address: string,
  latitude: number,
  longtitude: number
}


export default function Details() {
  const locsData: locData[] = [
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 1400,
      name: '大人明里が踏切待ち',
      address: '日本, 東京都渋谷区千駄ヶ谷5丁目27−11',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 2,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345
    },
    {
      id: 3,
      name: 'some place',
      address: 'somewhere',
      latitude: 1.1123,
      longtitude: 30.12345
    }
  ]
  return (
    <HomeLayout>
      <div className={style.container}>
        <Detail/>
       <div className={style.gallery}>
          <div className={style.galleryTitle}>
            <h2>实景照片</h2>
          </div>
        </div>
        <div>
          <div className={style.locsTable}>
            <h2>地址详情</h2>
          </div>  
          <LocTable locsData={locsData}/>
        </div>
      </div>
    </HomeLayout>
  );
}
