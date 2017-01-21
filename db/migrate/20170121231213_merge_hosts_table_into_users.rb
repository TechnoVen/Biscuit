class MergeHostsTableIntoUsers < ActiveRecord::Migration[5.0]
  def change
    drop_table :hosts

    add_column :users, :profile_1, :text
    add_column :users, :profile_2, :text
    add_column :users, :profile_3, :text
  end
end
