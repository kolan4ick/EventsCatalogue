class AddPriceToEvent < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :price, :boolean
  end
end
