import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Dave', lastName: 'Boku', email: 'davesah.bs@suk.org' };

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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250.50 }, { currentBalance: 2000.50 }]}
        />

    </section>
  )
}

export default Home