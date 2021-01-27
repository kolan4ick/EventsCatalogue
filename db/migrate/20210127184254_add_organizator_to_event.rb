class AddOrganizatorToEvent < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :orgranizator, :string
  end
end
