import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export function Slider() {
    return (
        <Splide options={{ rewind: true }} aria-label="React Splide Example" className='splid'>
            <SplideSlide className='sslide'>
                <p className='pstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                &nbsp;
                <p>-Someone Client</p>
            </SplideSlide>
            <SplideSlide>
            <p  className='pstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
            &nbsp;
            <p>-Someone Client</p>&nbsp;
            </SplideSlide>
            <SplideSlide>
          
            <p className='pstyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
            &nbsp;
            <p>-Someone Client</p>&nbsp;
            </SplideSlide>
        </Splide>
    );
}