import React, { useState } from 'react'

import {
  Box,
  Button,
  Checkbox,
  TextInput,
  Center,
  PasswordInput,
  Progress,
  Text,
  Popover,
  rem,
  Flex,
  Anchor,
  Title,
  Badge
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconX, IconCheck } from '@tabler/icons-react'
import StripeIcon from '../../assets/icons/Stripelogo.svg'

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text c={meets ? 'teal' : 'red'} style={{ display: 'flex', alignItems: 'center' }} mt={7} size='sm'>
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  )
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' }
]

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1

  requirements.forEach(requirement => {
    if (!requirement.re.test(password)) {
      multiplier += 1
    }
  })

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
}

const SignInPage: React.FC = () => {
  const [popoverOpened, setPopoverOpened] = useState(false)
  const [password, setPassword] = useState('')
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (getStrength(value) < 100 ? 'Password must meet all requirements' : null)
    }
  })

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(password)} />
  ))

  const strength = getStrength(password)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'

  return (
    <Center style={{ height: '100vh' }}>
      <Flex direction='column' gap={30}>
        <Box pl={20}>
          <img src={StripeIcon} alt='Stripe Logo' width={58} height={24} />
        </Box>
        <Box
          style={{
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: '8px',

            padding: '50px'
          }}
        >
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <Title order={3} pb={25} c='#505050'>
              Sign in to your account
            </Title>
            <Flex direction='column' gap={20}>
              <Box w={406}>
                <TextInput
                  size='md'
                  c='#494949'
                  label='Email'
                  placeholder='your@email.com'
                  {...form.getInputProps('email')}
                  error={form.errors.email}
                  labelProps={{ style: { marginBottom: '10px' } }}
                />
              </Box>
              <Popover opened={popoverOpened} position='bottom' width='target' transitionProps={{ transition: 'pop' }}>
                <Popover.Target>
                  <div onFocusCapture={() => setPopoverOpened(true)} onBlurCapture={() => setPopoverOpened(false)}>
                    <Flex justify='space-between' align='center' mb='xs'>
                      <Text size='sm' fw={500} c='#494949'>
                        Password
                      </Text>
                      <Anchor href='/forgot-password' size='sm' td='none'>
                        Forgot your password?
                      </Anchor>
                    </Flex>
                    <PasswordInput
                      size='md'
                      placeholder='Your password'
                      value={password}
                      onChange={event => {
                        setPassword(event.currentTarget.value)
                        form.setFieldValue('password', event.currentTarget.value)
                      }}
                      error={form.errors.password}
                    />
                  </div>
                </Popover.Target>
                <Popover.Dropdown>
                  <Progress color={color} value={strength} size={5} mb='xs' />
                  <PasswordRequirement label='Includes at least 6 characters' meets={password.length > 5} />
                  {checks}
                </Popover.Dropdown>
              </Popover>

              <Checkbox
                c='#494949'
                mt='md'
                label='Stay signed in for a week'
                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
              />

              <Button w='100%' type='submit' mt='md' size='md' disabled={!form.values.termsOfService}>
                Continue
              </Button>

              <Anchor ta='center' href='/sign-on' size='sm' td='none'>
                Use single sign-on (SSO) instead
              </Anchor>
            </Flex>
          </form>
        </Box>
        <Flex direction='column' gap={20}>
          <Flex gap={3} pl={20}>
            <Text size='sm' c='#494949'>
              Don’t have an account?
            </Text>
            <Anchor size='sm' href='/sign-in'>
              Sign up
            </Anchor>
          </Flex>
          <Flex gap={5} pl={20}>
            <Text
              size='sm'
              style={{
                color: '#494949',
                textTransform: 'capitalize',

                fontWeight: 400,
                cursor: 'pointer'
              }}
            >
              © Stripe
            </Text>
            <Anchor td='none' c='#494949' size='sm'>
              • Contact •
            </Anchor>
            <Anchor td='none' c='#494949' size='sm'>
              Privacy & terms
            </Anchor>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  )
}

export default SignInPage
