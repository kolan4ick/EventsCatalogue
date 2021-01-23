class CreateEventSubscribes < ActiveRecord::Migration[6.1]
  def change
    create_table :event_subscribes do |t|
      t.integer :user
      t.integer :event
      t.timestamps
    end
  end
end
