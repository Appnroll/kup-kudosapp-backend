import {User} from "../src/kudos/model/user.entity";
import {Kudos} from "../src/kudos/model/kudos.entity";

export const seedDefaultData = async (kudosRepository, userKudosEntityRepository, userRepository, slackTokenRepository) => {
  const userCreating: User = userRepository.create({
    name: `nameCreator`,
    slackId: `slack-id`,
    image_24: '',
    image_32: '',
    image_48: '',
    image_72: '',
    image_192: ''
  } as User)
  await userRepository.save(userCreating)

  const users = [...Array(5).keys()].map(el => {
    return userRepository.create({
      name: `name${el}`,
      slackId: `slack-id${el}`,
      image_24: '',
      image_32: '',
      image_48: '',
      image_72: '',
      image_192: ''
    } as User);
  })
  await userRepository.save(users)

  const kudos = [...Array(5).keys()].map(el => {
    return kudosRepository.create({
      description: `description ${el}`
    } as Kudos)
  })
  await kudosRepository.save(kudos)

  const kudosEntity = [...Array(5).keys()].map(el => {
    return userKudosEntityRepository.create({
      kudos: kudos[el],
      user: users[el],
      from: userCreating,
      historyCreatedAt: new Date()
    })
  })
  await userKudosEntityRepository.save(kudosEntity)


  const tokens = [...Array(5).keys()].map(el => {
    return slackTokenRepository.create({
      token: 'token',
      user: users[el]
    })
  })
  await slackTokenRepository.save(tokens)
}

export const seedAuthData = async (userRepository, slackTokenRepository) => {
  const userCreating: User = userRepository.create({
    name: `nameCreator`,
    slackId: `slack-id`,
    image_24: '',
    image_32: '',
    image_48: '',
    image_72: '',
    image_192: ''
  } as User)
  await userRepository.save(userCreating)

  const users = [...Array(5).keys()].map(el => {
    return userRepository.create({
      name: `name${el}`,
      slackId: `slack-id${el}`,
      image_24: '',
      image_32: '',
      image_48: '',
      image_72: '',
      image_192: ''
    } as User);
  })
  await userRepository.save(users)

  const tokens = [...Array(5).keys()].map(el => {
    return slackTokenRepository.create({
      token: 'token',
      user: users[el]
    })
  })
  await slackTokenRepository.save(tokens)
}