class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :name
      t.date :end_date
      t.date :begin_date
      t.string :body
      t.string :place

      t.timestamps
    end
  end
end
