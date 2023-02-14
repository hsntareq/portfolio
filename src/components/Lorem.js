import React from 'react'

export default function Lorem(props) {
    let paraOut = [];
    let paraCount = props.para ?? 1;
    for (let i = 0; i < paraCount; i++) {
        paraOut.push(<p key={i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, error ullam. Optio iusto impedit autem facere, totam consequatur, vitae assumenda saepe accusantium possimus architecto asperiores ad sequi numquam. Ad distinctio, autem aliquid temporibus suscipit excepturi itaque quam rerum eius ducimus! Rem non optio earum laboriosam quasi, tempora, voluptas minima tenetur ab voluptates recusandae iusto delectus facilis fuga voluptatum in ducimus minus dignissimos. Dolorem deleniti ipsa eveniet neque, autem praesentium ullam facere illo ab sunt ad ipsam accusamus optio rem vero quam nobis veniam error modi? Reiciendis, aliquid deleniti delectus ratione sed, quaerat illo dolorum id eius nihil earum cupiditate omnis.</p>);
    }

    return (
        <div>{paraOut}</div>
    )
}
