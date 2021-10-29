const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')

const { dbConnect } = require('../services/db')
const { encryptPassword } = require('../services/auth')

class User extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    console.log('associate init')
  }
}

User.init(
  {
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false }
  },
  {
    sequelize: dbConnect,
    modelName: 'User',
    underscored: true,
    indexes: [
      {
        fields: ['email'],
        unique: true
      },
      {
        fields: ['username'],
        unique: true
      }
    ]
  }
)

User.findById = userId => {
  return User.findOne({
    where: {
      id: userId
    },
    raw: true
  })
}

User.beforeCreate(async user => {
  user.password = await encryptPassword(user.password)
})

User.beforeCreate(async user => {
  user.id = uuidv4()
})

User.comparePassword = (candidatePassword, password, next) => {
  bcrypt.compare(candidatePassword, password, (err, same) => {
    if (err) {
      return next(err)
    }
    next(null, same)
  })
}

module.exports = User
