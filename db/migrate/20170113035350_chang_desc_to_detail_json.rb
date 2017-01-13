class ChangDescToDetailJson < ActiveRecord::Migration[5.0]
  def change
    rename_column(:hosts, :desc_1, :detail1)
    rename_column(:hosts, :desc_2, :detail2)
    rename_column(:hosts, :desc_3, :detail3)
  end
end
