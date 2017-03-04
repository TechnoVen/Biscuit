class RemoveDeprecatedFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_columns :users, :profile_1, :profile_2, :profile_3
  end
end
