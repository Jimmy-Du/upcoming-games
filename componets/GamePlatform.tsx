import '@/app/globals.css'



interface IProps {
  platform: string,
  website: string
}



const GamePlatform: React.FC<IProps> = ({platform, website}) => {
  // holds the filename for the logo to displayed
  let logoFilename = 'pc.svg'

  // if the platform is PS4 or PS5 the logo is set to the Playstation logo
  if (platform == 'PS4' || platform == 'PS5') {
    logoFilename = 'playstation.svg'
  }
  // if the platform is Series or One the logo is set to the Xbox logo
  else if (platform == 'Series' || platform == 'One') {
    logoFilename = 'xbox.svg'
  }
  // if the platform is Switch the logo is set to the Nintendo Switch logo
  else if (platform == 'Switch') {
    logoFilename = 'nintendo-switch.svg'
  }

  return (
    <a className='platform-info' href={website} target='_blank'>
      <img src={logoFilename}/>
      <span>{platform}</span>
    </a>
  )
}



export default GamePlatform