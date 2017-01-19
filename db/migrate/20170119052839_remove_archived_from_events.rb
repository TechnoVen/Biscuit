class RemoveArchivedFromEvents < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :archived, :boolean
  end
end
