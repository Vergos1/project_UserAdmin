import React, { useState } from 'react'
import s from '../../components/reports-section/reports-section.module.scss'
import { Title, Box, Container, Flex, Select } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'

const ReportSection: React.FC = () => {
  const [isOpenSelect, setIsOpenSelect] = useState(false)
  return (
    <>
      <Box pl={50} pr={50} pt={50}>
        <Title>Reports overview</Title>
        <Flex>
          <Select
            size='xs'
            defaultValue='Last 12 months'
            data={['Last 12 months', 'last 6 months', 'last 3 months', 'last months']}
            rightSection={<IconChevronDown className={isOpenSelect ? s.selectOpen : s.selectClose} />}
            onDropdownOpen={() => setIsOpenSelect(true)}
            onDropdownClose={() => setIsOpenSelect(false)}
          />
        </Flex>
      </Box>
    </>
  )
}

export default ReportSection
