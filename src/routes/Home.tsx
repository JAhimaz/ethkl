import styled from "@emotion/styled"
import KLCC from '@assets/images/klcc_ascii.gif'
import Typography from "@components/atoms/Typography/"
import Navigation from "@layout/Navigation"
import { useRecoilValue } from "recoil"
import eventDataState from "@libs/@events/provider"
import { useTheme } from "@emotion/react"

const Home = () => {

  const events = [...useRecoilValue(eventDataState)];

  const sortedEvents = events.sort((a, b) => a.startDate.getTime() - b.startDate.getTime()).filter(event => event.startDate.getTime() > Date.now()).slice(0, 2);


  return (
    <>
      <Navigation />
      <HomeDivider>
        <section css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '3rem',

          '@media (max-width: 768px)': {
            height: 'auto',
            gap: '2rem',
            alignItems: 'center',
            textAlign: 'center',
          }
        }}>
          <div>
            <Typography size="title" weight={700} css={{ margin: '-0.75rem' }}>ETHKL_</Typography>
            <Typography size="lg" weight={400}>Malaysia's Biggest Ethereum Community</Typography>
          </div>
          <div>
            <Typography size="lg" weight={700} color={useTheme().colors.tertiary} css={{
              marginBottom: '1rem',
            }}>Upcoming Events</Typography>
            {sortedEvents.map((event) => (
              <UpcomingEvent href={`/${event.id}`} key={event.id}>
                <Typography size="lg" weight={400}>
                  {event.name}
                </Typography>
                <Typography size="sm" weight={400}>{event.startDate.toString()}</Typography>
                {event?.location && <Typography size="sm" weight={400}>{event?.location}</Typography>}
              </UpcomingEvent>
            ))}
          </div>
          <Typography size="lg" weight={400}><a href="/events" css={{
            '&:hover': {
              '::after': {
              content: '" →"',
              }
            }
          }}>More Events</a></Typography>
        </section>

        <section css={{ display: 'flex', justifyContent: 'center' }}>
          <img src={KLCC} alt="KLCC ETHKL in ASCII format" width={"80%"} css={{
            transform: 'scale(1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            }
          }}/>
        </section>
      </HomeDivider>
    </>
  )
}

export default Home

const HomeDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const UpcomingEvent = styled.a`
  text-decoration: none;

  > :last-of-type {
    margin-bottom: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`