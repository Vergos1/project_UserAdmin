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
  BackgroundImage
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom' // Используется для перенаправления
import { IconX, IconCheck } from '@tabler/icons-react'
import StripeIcon from '../../assets/icons/Stripelogo.svg'
import Background from '../../assets/images/app-background.jpg'
import { showNotification } from '@mantine/notifications'

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text c={meets ? 'teal' : 'red'} style={{ display: 'flex', alignItems: 'center' }} mt={7} size='sm'>
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}
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
  const navigate = useNavigate() // Используется для перенаправления

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

  const handleSubmit = (values: typeof form.values) => {
    console.log('Form submitted:', values)

    showNotification({
      title: 'Success',
      message: 'You have successfully signed in!',
      color: 'teal',
      icon: <IconCheck size={16} />,
      position: 'bottom-right'
    })

    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }

  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(password)} />
  ))

  const strength = getStrength(password)
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'

  return (
    <BackgroundImage src={Background}>
      <Center style={{ height: '100vh' }}>
        <Flex direction='column' gap={30}>
          <Box pl={0}>
            <img src={StripeIcon} alt='Stripe Logo' width={58} height={24} />
          </Box>
          <Box
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
              backgroundColor: '#FFFFFF',
              padding: '50px'
            }}
          >
            <form onSubmit={form.onSubmit(handleSubmit)}>
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
                <Popover
                  opened={popoverOpened}
                  position='bottom'
                  width='target'
                  transitionProps={{ transition: 'pop' }}
                >
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

                <Button w='100%' type='submit' mt='md' size='md'>
                  Continue
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Center>
    </BackgroundImage>
  )
}

export default SignInPage
