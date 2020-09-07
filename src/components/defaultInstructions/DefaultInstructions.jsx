import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import MainLinearIcon from '../icons/MainLinearIcon'
import VaultIcon from '../icons/VaultIcon'
import WalletIcon from '../icons/WalletIcon'
import DaoIcon from '../icons/DaoIcon'
import CoverIcon from '../icons/CoverIcon'
import GovernIcon from '../icons/GovernIcon'
import ZapIcon from '../icons/ZapIcon'
import DashboardIcon from '../icons/DashboardIcon'

import {
  Container,
  Shadow,
  Wrapper,
  AccordionContainer,
  Title,
  AccordionDescription,
  TextBold,
  Content,
  FlexCenter,
  SubTitle,
  Button,
  Text,
  Description,
  LogoButton,
  SpanDescription,
} from './style'

const DefaultInstructions = ({ currentTheme, isBeta }) => {
  const { linearIcon, linearMiddleIcon, iconColor, iconGlowColor, defInstructions } = currentTheme

  const [shadowDisabled, setShadowDisabled] = useState(false)
  const [defOpacity, setDefOpacity] = useState(1)

  const onScroll = (e) => {
    console.log(e)
    // setShadowDisabled(e.target.scrollHeight - e.target.scrollTop - 50 <= e.target.clientHeight)
  }

  return (
    <Container>
      <Wrapper onScroll={onScroll} isBeta={isBeta}>
        <AccordionContainer>
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownIcon color={defInstructions.acordion.icon} />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Title>Quick start: Deposit stable coins into yCrv vault</Title>
              <AccordionDescription>
                <TextBold>Contract</TextBold> unaudited. Use at your own risk.
              </AccordionDescription>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
        <Content>
          <Title>What would you like to do?</Title>
          <FlexCenter>
            <MainLinearIcon color={linearIcon} middle={linearMiddleIcon} />
          </FlexCenter>
          <SubTitle>INVEST</SubTitle>
          <Button border={defInstructions.border.invest.vault} href='#'>
            <LogoButton>
              <VaultIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Vault</Text>
            </LogoButton>
            <Description>
              Harvest DeFi Yield Opportunities on Autopilot <SpanDescription>Up to 50% APY</SpanDescription>
            </Description>
          </Button>
          <Button border={defInstructions.border.invest.earn} href='#'>
            <LogoButton>
              <WalletIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Earn</Text>
            </LogoButton>
            <Description>
              Maximize Savings With Automated DeFi Lending <SpanDescription>Up to 50% APY</SpanDescription>
            </Description>
          </Button>
          <Button border={defInstructions.border.invest.dao} href='#'>
            <LogoButton>
              <DaoIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>DAO</Text>
            </LogoButton>
            <Description>??? - Delegated Funding DAO Vaults</Description>
          </Button>
          <SubTitle>PROTECT</SubTitle>
          <Button border={defInstructions.border.protect.cover} href='#'>
            <LogoButton>
              <CoverIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Cover</Text>
            </LogoButton>
            <Description>Insurance product coming soon..</Description>
          </Button>
          <SubTitle>GOVERN</SubTitle>
          <Button border={defInstructions.border.govern.sentiment_vote} href='#'>
            <LogoButton>
              <GovernIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Sentiment Vote</Text>
            </LogoButton>
            <Description>Off-chain sentiment voting on potential Yearn Improvement Proposals</Description>
          </Button>
          <Button border={defInstructions.border.govern.governance_vote} href='#'>
            <LogoButton>
              <GovernIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Governance Vote</Text>
            </LogoButton>
            <Description>On-chain governance voting to improve Yearn</Description>
          </Button>
          <SubTitle>MANAGE</SubTitle>
          <Button border={defInstructions.border.manage.zap} href='#'>
            <LogoButton>
              <ZapIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Zap</Text>
            </LogoButton>
            <Description>Swap your assets into collateral accepted by Yearn</Description>
          </Button>
          <Button border={defInstructions.border.manage.dashboard} href='#'>
            <LogoButton>
              <DashboardIcon color={iconColor} glowColor={iconGlowColor} />
              <Text>Dashboard</Text>
            </LogoButton>
            <Description>Dashboard provided by Zapper.fi</Description>
          </Button>
        </Content>
      </Wrapper>
      <Shadow shadowDisabled={shadowDisabled} />
    </Container>
  )
}

export default DefaultInstructions
