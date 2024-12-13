import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/textfiles/bg.png'
import oneSupplySvg from '@/images/textfiles/1bsupply.svg'
import contractRenouncedSvg from '@/images/textfiles/contractrenounced.svg'
import liquidityLockedSvg from '@/images/textfiles/liquiditylocked.svg'
import tokenomicsSvg from '@/images/textfiles/tokenomics.svg'

export function NewbLore() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-blue-600 py-12 md:py-16 h-screen px-4"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative font-chenile h-full">
        <div className="flex flex-col items-center justify-between h-[90%] py-8 md:py-12 my-auto">
          <Image 
            src={tokenomicsSvg}
            alt="Tokenomics"
            width={800}
            height={50}
            className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[800px]"
          />
          <div className="flex flex-col items-center justify-between h-full w-full py-8 md:py-12">
            <a 
              href="https://basescan.org/token/0xeb9e49fb4c33d9f6aefb1b03f9133435e24c0ec6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center transform transition-all duration-300 hover:scale-110"
            >
              <Image 
                src={contractRenouncedSvg}
                alt="Contract Renounced"
                width={700}
                height={50}
                className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[700px] transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              />
            </a>
            <a 
              href="https://beta.uncx.network/lockers/univ3/chain/8453/address/0x425fa400f863b68d5a85ad26eff6e4c2672d8cf5/lock/0x231278edd38b00b07fbd52120cef685b9baebcc1831"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center transform transition-all duration-300 hover:scale-110"
            >
              <Image 
                src={liquidityLockedSvg}
                alt="Liquidity Locked"
                width={600}
                height={50}
                className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[600px] transform transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
              />
            </a>
            <Image 
              src={oneSupplySvg}
              alt="1B Supply"
              width={600}
              height={50}
              className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[600px]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
