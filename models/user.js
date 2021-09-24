const { Model, DataTypes } = require('sequelize')

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
        unique: true,
        fields: ['email', 'username']
      }
    ]
  }
)

User.beforeCreate(async user => {
  user.password = await encryptPassword(user.password)
})

module.exports = User
