import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Dave' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Selam,"
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions seamlessly."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={50000.00}
          />

        </header>
      </div>
    </section>
  )
}

export default Home